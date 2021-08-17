import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dfwigtkfn', 
    api_key: '672412766581485', 
    api_secret: '4oOgVjdUCx5oHQYTL6ZtOywcvxU',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar el URL', async ( ) => {
        const resp = await fetch("https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png");
        const blob = await resp.blob();

        const file = new File( [blob], "foto.png" );
        const url = await fileUpload( file );

        expect( typeof url ).toBe( "string" );

        //Borrar imagen por ID
        const segments = url.split("/");
        const imageId = segments[ segments.length - 1].replace(".png", "");

        cloudinary.v2.api.delete_resources( imageId, {}, () => {} );
    
    });

    test('debe de retornar un error', async () => {

        const file = new File( [], "foto.png" );
        const url = await fileUpload( file );

        expect( url ).toBe( null );
    
    });
    
});
