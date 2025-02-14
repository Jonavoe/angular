import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TweetService } from './tweet.service'; // Importar el servicio para manejar tweets
import { TweetResponse } from './tweet-response.model'; // Importar la interfaz de respuesta de tweet

@Component({
  selector: 'app-create-tweet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss'],
})
export class CreateTweetComponent {
  tweetContent = '';
  height = 'auto';

  constructor(private tweetService: TweetService) {}

  adjustHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    console.log(this.tweetContent);
  }

  isTextTooLong(): boolean {
    return this.tweetContent.length >= 256;
  }

  // Método para publicar el tweet
  publishTweet(): void {
    if (this.tweetContent.trim()) {
      const tweetData = {
        idUser: 'user123', // Aquí pon el ID del usuario actual
        msg: this.tweetContent,
        like: 0, // Valor inicial de los "me gusta"
        createdAt: new Date(),
      };

      // Usamos el servicio para enviar el tweet al backend
      this.tweetService.createTweet(tweetData).subscribe(
        (response: TweetResponse) => {
          console.log('Tweet publicado:', response);
          this.tweetContent = ''; // Limpiar el contenido del textarea
        },
        error => {
          console.error('Error al publicar el tweet:', error);
        }
      );
    } else {
      alert('El tweet no puede estar vacío');
    }
  }
}
