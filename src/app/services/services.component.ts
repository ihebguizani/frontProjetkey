import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Consultation en Ligne',
      description: 'Parlez à un médecin depuis le confort de votre maison.',
      icon: 'fas fa-laptop-medical'
    },
    {
      title: 'Soins à Domicile',
      description: 'Recevez des soins de qualité chez vous.',
      icon: 'fas fa-house-user'
    },
    {
      title: 'Pharmacie en Ligne',
      description: 'Commandez vos médicaments et faites-les livrer à votre porte.',
      icon: 'fas fa-pills'
    }
  ];

}
