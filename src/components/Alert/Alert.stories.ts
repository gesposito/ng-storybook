import { storiesOf, moduleMetadata } from "@storybook/angular";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AlertClose } from "./AlertClose.example";

storiesOf("Alert", module)
  .addDecorator(
    moduleMetadata({
      imports: [NgbModule.forRoot()],
      schemas: [],
      declarations: [],
      providers: []
    })
  )
  .add("Esempi", () => ({
    templateUrl: "Alert.stories.html",
    props: {}
  }))
  .add("Link evidenziato", () => ({
    template: `
      <ngb-alert [dismissible]="false" type="danger">
        Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
      </ngb-alert>
    `,
    props: {}
  }))
  .add("Contenuto aggiuntivo", () => ({
    template: `
      <ngb-alert [dismissible]="false" type="success">
        <h4 class="alert-heading">Avviso di successo!</h4>
        <p>Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.</p>
        <hr>
        <p class="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>
      </ngb-alert>
    `,
    props: {}
  }))
  .add("Chiusura", () => ({
    component: AlertClose,
    props: {}
  }));
