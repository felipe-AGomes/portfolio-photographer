import { useForm } from 'react-hook-form';
import S from './SendMe.module.css';

type Inputs = {
	name: string;
	message: string;
};

export default function SendMe() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit = async (event: Inputs) => {
		const query = `mailto:falmeidagomes13@gmail.com?subject=${encodeURIComponent(
			'Portfolio Fotografia',
		)}&body=${encodeURIComponent(event.message)}`;

		window.location.href = query;
	};

	return (
		<div className={S.sendMeContain}>
			<div>
				<h2>Entre em contato</h2>
				<p>
					Para consultas comerciais ou quaisquer perguntas, não hesite em me
					contatar. Estou ansioso para ouvir de você!
				</p>
			</div>
			<form
				className={S.formContain}
				onSubmit={handleSubmit(onSubmit)}
			>
				<label htmlFor='name'>Nome:</label>
				<input
					autoComplete=''
					type='text'
					id='name'
					{...register('name')}
				/>
				<label htmlFor='mensagem'>Mensagem:</label>
				<textarea
					autoComplete='off'
					id='mensagem'
					{...register('message')}
				></textarea>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
}
