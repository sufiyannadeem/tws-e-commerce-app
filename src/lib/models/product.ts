import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  originalId: {
    type: String,
    required: true,
    unique: true
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  oldPrice: { 
    type: Number 
  },
  categories: [{ 
    type: String 
  }],
  image: [{ 
    type: String 
  }],
  rating: { 
    type: Number, 
    default: 0 
  },
  sales: {
    type: Number,
    default: 0
  },
  amount: { 
    type: Number, 
    required: true 
  },
  shop_category: { 
    type: String, 
    required: true 
  },
  unit_of_measure: { 
    type: String 
  },
  colors: [{ 
    type: String 
  }],
  sizes: [{ 
    type: String 
  }]
}, {
  timestamps: true
});

const Product =
  (mongoose.models as Record<string, mongoose.Model<any>>).Product ||
  mongoose.model<any>('Product', productSchema);

export default Product;
