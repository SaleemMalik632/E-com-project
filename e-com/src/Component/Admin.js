import React from 'react';
import { useRef } from 'react';



const Admin = () => {
    const name = useRef(null);
    const price = useRef(null);
    const Stock = useRef(null);
    const Description = useRef(null);
    const imge = useRef(null);

    async function saveform(event) {
        event.preventDefault();
        if (name.current.value !== '' && price.current.value !== '' && Stock.current.value !== '' && Description.current.value !== '' && imge.current.files.length > 0) {
            const Data = new FormData();
            Data.append('Name', name.current.value);
            Data.append('Price', price.current.value);
            Data.append('Stock', Stock.current.value);
            Data.append('Description', Description.current.value);
            Data.append('image', imge.current.files[0]);
            try {
                const response = await fetch('http://localhost:8000/SaveData', { method: 'POST', body: Data })
                if (response.ok) {
                    const redata = response.json();
                    console.log(redata);
                    alert('Data is Save in DataBase ');
                } else { 
                    alert('Error in Saveing Data')
                }
            } catch (Error) {
                alert('Error in the Data Saving Request')
            }

        } else {
            alert('Please full the forms ')
        }

    }


    return (
        <>
            <div className='outform'>
                <form>
                    <div className='form_'>
                        <label>Product Name</label>
                        <input type='text' ref={name} />
                        <label>Price</label>
                        <input type='Number' ref={price} />
                        <label>Stock</label>
                        <input type='number' ref={Stock} />
                        <label>Image</label>
                        <input type='file' ref={imge} />
                        <label>Prodct Description</label>
                        <textarea name="Text1" cols="40" rows="5" ref={Description}></textarea>
                        <input style={{ backgroundColor: '#00abc0', borderRadius: '10px', marginLeft: '10px' }} onClick={saveform} type='submit' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin