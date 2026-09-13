@Library('Shared') _

pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'sufiyannadeem/easyshop-app'
        DOCKER_MIGRATION_IMAGE_NAME = 'sufiyannadeem/easyshop-migration'

        DOCKER_IMAGE_TAG = "${BUILD_NUMBER}"

        // Application repository branch
        GIT_BRANCH = "master"
    }

    stages {

        // ==========================================================
        // 1. CLEAN WORKSPACE
        // ==========================================================
        stage('Cleanup Workspace') {
            steps {
                script {
                    clean_ws()
                }
            }
        }

        // ==========================================================
        // 2. CLONE APPLICATION REPOSITORY
        // ==========================================================
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

        // ==========================================================
        // 3. RUN APPLICATION TESTS
        // ==========================================================
        stage('Run Tests') {
            steps {
                script {
                    run_tests()
                }
            }
        }

        // ==========================================================
        // 4. TRIVY FILESYSTEM SCAN
        // ==========================================================
        stage('Security Scan - Filesystem') {
            steps {
                script {
                    trivy_scan()
                }
            }
        }

        // ==========================================================
        // 5. BUILD DOCKER IMAGES
        // ==========================================================
        stage('Build Docker Images') {
            parallel {

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
        }

        // ==========================================================
        // 6. TRIVY DOCKER IMAGE SCAN
        // ==========================================================
        stage('Security Scan - Docker Images') {
            steps {
                script {

                    echo "=========================================="
                    echo "Scanning Main App Image"
                    echo "=========================================="

                    trivy_image(
                        env.DOCKER_IMAGE_NAME,
                        env.DOCKER_IMAGE_TAG
                    )

                    echo "=========================================="
                    echo "Scanning Migration Image"
                    echo "=========================================="

                    trivy_image(
                        env.DOCKER_MIGRATION_IMAGE_NAME,
                        env.DOCKER_IMAGE_TAG
                    )
                }
            }
        }

        // ==========================================================
        // 7. PUSH DOCKER IMAGES
        // ==========================================================
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

        // ==========================================================
        // 8. UPDATE GITOPS REPOSITORY
        // ==========================================================
        stage('Update GitOps Manifests') {
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

    // ==============================================================
    // POST ACTIONS
    // ==============================================================
    post {

        success {
            echo "=========================================="
            echo "JENKINS PIPELINE COMPLETED SUCCESSFULLY"
            echo "=========================================="

            echo "Application Image:"
            echo "${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"

            echo "Migration Image:"
            echo "${DOCKER_MIGRATION_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"

            echo "GitOps Repository:"
            echo "https://github.com/sufiyannadeem/tws-e-commerce-gitops"

            echo "GitOps Branch:"
            echo "main"
        }

        failure {
            echo "=========================================="
            echo "JENKINS PIPELINE FAILED"
            echo "=========================================="
        }

        always {
            echo "Cleaning Jenkins workspace..."

            script {
                clean_ws()
            }
        }
    }
}
