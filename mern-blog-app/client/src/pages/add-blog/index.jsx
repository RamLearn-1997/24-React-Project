import { useContext, useEffect } from 'react'
import classes from './styles.module.css'
import { GlobalContext } from '../../context'
import axios from 'axios'
import { useNavigate , useLocation} from 'react-router-dom'

export default function AddNewBlog(){

    const {formData, setFormData, isEdit,setIsEdit} = useContext(GlobalContext)
    const navigation = useNavigate()
    const location = useLocation()

    async function handleSaveBlogToDatabase(){

        const response = isEdit? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`, {
            title: formData.title,
            description: formData.description
        }):  await axios.post('http://localhost:5000/api/blogs/add', {
            title: formData.title,
            description: formData.description
        })

        const result = await response.data;

        if(result){
            setIsEdit(false)
            setFormData({
                title: '',
                description: ''
            })
            navigation('/')
        }
    }
    

    useEffect(() => {
        if(location.state){
            const {getCurrentBlogItem} = location.state
            setIsEdit(true)
            setFormData({
                title: getCurrentBlogItem.title,
                description: getCurrentBlogItem.description
            })
        }

    }, [location])

    return <div className={classes.wrapper}>
        <h1>{isEdit ? 'Edit a Blog' : "Add a Blog"}</h1>
        <div className={classes.formWrapper}>
          <input type="text"
           name='title'
           placeholder='Enter Blog Title'
           id='title'
           value={formData.title} 
            onChange={
                (e) => setFormData({
                    ...formData,
                    title: e.target.value
                })
            }
           />
           <textarea
            name='description'
            placeholder='Enter a Description of Blog'
            id='description'
            value={formData.description}
            onChange={
                (e) => setFormData({
                    ...formData,
                    description: e.target.value
                })
            }
           />
           <button onClick={handleSaveBlogToDatabase}>{isEdit ? 'Edit Blog' : "Add New Blog"}</button>
        </div>
    </div>
}