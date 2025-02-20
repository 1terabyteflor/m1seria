import { useState } from 'react';
import emailjs from 'emailjs-com';

const ThankYouModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 px-8 rounded relative text-xs font-semibold w-lg lg:w-xl mx-6 lg:mx-auto">
                <button 
                    onClick={onClose} 
                    className="absolute top-0 right-0 border m-4 bg-black rounded-full border-black py-2 px-3 text-white hover:bg-white hover:text-black font-semibold"
                >
                    X
                </button>
                <p className='my-12 text-center'>gracias! Te enviamos un mail<br></br> con los detalles del pago</p>
            </div>
        </div>
    );
};

export const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        piso: '',
        direccion: '',
        provincia: '',
        codigoPostal: '',
        mail: '',
        whatsapp: '',
        aclaracion: '',
    });
    const [isThankYouOpen, setThankYouOpen] = useState(false); 
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send('service_xbod80m', 'template_w9f6m7u', formData, 'yM_YybL8hy7rfXjED')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setTimeout(() => {
                    setThankYouOpen(true); 
                    setIsLoading(false);
                    onClose(); 
                }, 2000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setIsLoading(false);
            });
    };

    return (
        <>
            {isThankYouOpen && <ThankYouModal isOpen={isThankYouOpen} onClose={() => setThankYouOpen(false)} />}
            { !isOpen ? null : (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 px-8 rounded relative text-xs font-semibold max-w-xs lg:max-w-xl mx-6 lg:mx-auto">
                        <button 
                            onClick={onClose} 
                            className="absolute top-0 right-0 border m-4 bg-black rounded-full border-black py-2 px-3 text-white hover:bg-white hover:text-black font-semibold"
                        >
                            X
                        </button>
                        <form className="flex flex-col gap-y-2 mt-8" onSubmit={handleSubmit}>
                            <label className='flex flex-col gap-y-1'>
                                Nombre y apellido
                                <input type="text" name="nombre" className="border border-black p-2" required onChange={handleChange} />
                            </label> 
                            <div className="flex space-x-4 mr-8 lg:mr-0">
                                <label className='flex flex-col gap-y-1 w-1/3'>
                                    Dirección
                                    <input type="text" name="direccion" className="border border-black p-2" onChange={handleChange} />
                                </label>
                                <label className='flex flex-col gap-y-1 w-1/3'>
                                    Piso/Timbre
                                    <input type="text" name="piso" className="border border-black p-2" required onChange={handleChange} />
                                </label>
                                <label className='flex flex-col gap-y-1 w-1/3'>
                                    Provincia
                                    <input type="text" name="provincia" className="border border-black p-2" required onChange={handleChange} />
                                </label>
                            </div>
                            <label className='flex flex-col gap-y-1'>
                                Código postal
                                <input type="text" name="codigoPostal" className="border border-black p-2" required onChange={handleChange} />
                            </label>
                            <label className='flex flex-col gap-y-1'>
                                Mail
                                <input type="email" name="mail" className="border border-black p-2" required onChange={handleChange} />
                            </label>
                            <label className='flex flex-col gap-y-1'>
                                Whatsapp
                                <input type="text" name="whatsapp" className="border border-black p-2" required onChange={handleChange} />
                            </label>
                            <label className='flex flex-col gap-y-1'>
                                Aclaración adicional
                                <textarea name="aclaracion" className="border border-black p-2 gap-y-1" onChange={handleChange} />
                            </label>
                            <button type="submit" className="mt-4 border bg-black hover:bg-white text-white hover:text-black border-black py-2 px-4 text-sm">
                                {isLoading ? 'cargando...' : 'enviar'}
                            </button>
                        </form>
                    </div>  
                </div>
            )}
        </>
    );
};
  
  