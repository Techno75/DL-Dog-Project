import { useState } from 'react';
import cx from 'classnames';
import UploadIcon from '../UploadIcon';
import SuccessIcon from '../SuccessIcon';
import useStyles from './useStyles';

const StanfordDogs = () => {
    const [ image, setImage ]       = useState(null);
    const [ imageURL, setImageURL ] = useState(null);
    const [ result, setResult ]     = useState(null);
    const classes                   = useStyles();

    const handleUploadImage = e => {
        setImage(e.target.files[0])
        setImageURL(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            image,
            image_name: image.name,
        }

        let formData = new FormData();
        formData.append("image", JSON.stringify(data));
        
        fetch("http://localhost:5000/result", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => setResult(JSON.stringify(data)))
    }
    
    return <div className={classes.contentSD}>
        { imageURL && <img aria-hidden src={imageURL} alt="upload-image" className={classes.imgUpload} /> }
        <form onSubmit={e => handleSubmit(e)} className={classes.form}>
            <input 
                type="file" 
                id="image" 
                accept="image/png, image/jpeg"  
                onChange={e => handleUploadImage(e)} 
                className={classes.none} 
                required
            />
            <label for="image" className={ imageURL ? cx(classes.fileLabels, classes.success) : classes.fileLabels}>
                { imageURL ? <SuccessIcon /> : <UploadIcon /> }
                <span className={classes.span}> { imageURL 
                    ? "L'image à bien été importé !" 
                    : "Choisissez un fichier" 
                }</span>
            </label>
            <input type="submit" className={classes.submit} value="Envoyer"/>
        </form>
        { result && <div className="resultat"> 
            {
                result.map((data, key) => <div key={key}>
                    <p>{data}</p>
                </div>)
            }
        </div>}
    </div>
}

export default StanfordDogs;