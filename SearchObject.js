import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SearchObject = new Schema({

        title: String,
        amazon: {
            site: String,
            image: String,
            rating: String,
            price: String,
            offerPrice: String
        },
        flipkart: {
            site: String,
            image: String,
            rating: String,
            price: String,
            offerPrice: String
        },
        vijaysales: {
          site: String,
          image: String,
          rating: String,
          price: String,
          offerPrice: String
        }
      

});

export default mongoose.model('SearchObject', SearchObject );