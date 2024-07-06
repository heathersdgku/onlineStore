import Product from '../components/product';
import './styles/catalog.css';

const categories = ['Fruit', 'Vegetable', 'Meat', 'Dairy'];

const data = [
    {
        "title": "Test1",
        "price": 10.99,
        "category": "fruit",
        "image": "test1.png",
        "_id": "1"
    },
    {
        "title": "Test2",
        "price": 15.99,
        "category": "vegetable",
        "image": "test2.png",
        "_id": "2"
    },
    {
        "title": "Test3",
        "price": 20.99,
        "category": "meat",
        "image": "test3.png",
        "_id": "3"
    },
    {
        "title": "Test4",
        "price": 25.99,
        "category": "dairy",
        "image": "test4.png",
        "_id": "4"
    },
    {
        "title": "Test5",
        "price": 30.99,
        "category": "fruit",
        "image": "test5.png",
        "_id": "5"
    }
];

function Catalog(){
    return(
        <div>
            <h1>Check out our Catalog!</h1>


            <div className="filters">
                {categories.map(cat => <button className='btn-warning'>{cat}</button>)}
            </div>

            {data.map(prod => <Product info={prod} /> )}

        </div>
        
    )
}

export default Catalog;