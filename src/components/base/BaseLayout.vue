<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="defaultBackPage"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end">
                    <slot name="actions"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>
<script>
import {IonHeader, IonTitle, IonToolbar, IonPage, IonContent,IonBackButton, IonButtons} from '@ionic/vue'
export default {
    props: ['pageTitle', 'defaultBackPage'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>