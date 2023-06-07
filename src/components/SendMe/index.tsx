import { useForm } from 'react-hook-form';
import { emailSubmit } from '@/functions/emailSubmit';
import S from './SendMe.module.css';
import { Inputs } from '@/@types';

export default function SendMe() {
	const { register, handleSubmit } = useForm<Inputs>();

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
				onSubmit={handleSubmit(emailSubmit)}
			>
				<label htmlFor='name'>Nome:</label>
				<input
					autoComplete=''
					type='text'
					id='name'
					required
					{...register('name')}
				/>
				<label htmlFor='mensagem'>Mensagem:</label>
				<textarea
					autoComplete='off'
					required
					id='mensagem'
					{...register('message')}
				></textarea>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
}
