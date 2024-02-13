import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['./images/*.{jpg,png}'], {
	destination: './public/images/projects',
	plugins: [
		//calidad entre 0 al 100, entre mas alto el numero, mas pesado la imagen
		imageminWebp({quality: 100})
	]
});

console.log('Images optimized');