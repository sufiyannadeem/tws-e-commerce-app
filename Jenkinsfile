@Library('Shared') _

pipeline {
agent any


environment {
    DOCKER_IMAGE_NAME = 'sufiyannadeem/easyshop-app'
    DOCKER_MIGRATION_IMAGE_NAME = 'sufiyannadeem/easyshop-migration'
    DOCKER_IMAGE_TAG = "${BUILD_NUMBER}"
    GIT_BRANCH = "master"
}

stages {

    stage('Cleanup Workspace') {
        steps {
            script {
                clean_ws()
            }
        }
    }

    stage('Clone Repository') {
        steps {
            script {
                clone(
                    "https://github.com/sufiyannadeem/tws-e-commerce-app.git",
                    "master"
                )
            }
        }
    }

    // 1. Validate application BEFORE building Docker images
    stage('Run Tests') {
        steps {
            script {
                run_tests()
            }
        }
    }

    // 2. Scan source code/dependencies
    stage('Security Scan - Filesystem') {
        steps {
            script {
                trivy_scan()
            }
        }
    }

    // 3. Build both Docker images
    stage('Build Docker Images') {

        stage('Build Main App Image') {
            steps {
                script {
                    docker_build(
                        imageName: env.DOCKER_IMAGE_NAME,
                        imageTag: env.DOCKER_IMAGE_TAG,
                        dockerfile: 'Dockerfile',
                        context: '.'
                )
            }
        }
    }

        stage('Build Migration Image') {
            steps {
                script {
                    docker_build(
                        imageName: env.DOCKER_MIGRATION_IMAGE_NAME,
                        imageTag: env.DOCKER_IMAGE_TAG,
                        dockerfile: 'scripts/Dockerfile.migration',
                        context: '.'
                )
            }
        }
    }
}

    // 4. Scan the actual Docker images
    stage('Security Scan - Docker Images') {
        steps {
            script {
                echo "Scanning Main App Image..."
                trivy_image(
                    env.DOCKER_IMAGE_NAME,
                    env.DOCKER_IMAGE_TAG
            )

                echo "Scanning Migration Image..."
                trivy_image(
                    env.DOCKER_MIGRATION_IMAGE_NAME,
                    env.DOCKER_IMAGE_TAG
            )
        }
    }
}

    // 5. Push only if all previous stages passed
    stage('Push Docker Images') {
        parallel {

            stage('Push Main App Image') {
                steps {
                    script {
                        docker_push(
                            imageName: env.DOCKER_IMAGE_NAME,
                            imageTag: env.DOCKER_IMAGE_TAG,
                            credentials: 'dockerhub-credentails'
                        )
                    }
                }
            }

            stage('Push Migration Image') {
                steps {
                    script {
                        docker_push(
                            imageName: env.DOCKER_MIGRATION_IMAGE_NAME,
                            imageTag: env.DOCKER_IMAGE_TAG,
                            credentials: 'dockerhub-credentails'
                        )
                    }
                }
            }
        }
    }

    // 6. Update Kubernetes image tag
    stage('Update Kubernetes Manifests') {
        steps {
            script {
                update_k8s_manifests(
                    imageTag: env.DOCKER_IMAGE_TAG,
                    manifestsPath: 'kubernetes',
                    gitCredentials: 'github-credentials',
                    gitUserName: 'Jenkins CI',
                    gitUserEmail: 'sufiyanmohammed098@gmail.com'
                )
            }
        }
    }
}


}
