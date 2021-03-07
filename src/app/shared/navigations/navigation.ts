

export const navigationDashboard= [
    {
        title    : 'Directorio',
        type     : 'item',
        url:'/directorio'
    },  
    {
        title    : 'Oficina Virtual',
        type     : 'group',
        url:'/oficina-virtual',
        children : [
            {
                title    : 'Agro',
                type     : 'item',
                icon     : 'assets/img/sidenav/agro.png',
                url      : '',
            },
            {
                title    : 'Alimentos y bebidas',
                type     : 'item',
                icon     : 'assets/img/sidenav/alimento-y-bebida.png',
                url      : '',
            },
            {
                title    : 'Animales y mascotas',
                type     : 'item',
                icon     : 'assets/img/sidenav/mascotas.png',
                url      : '/agro',
            },
            {
                title    : 'Papelerías',
                type     : 'item',
                icon     : 'assets/img/sidenav/servicios-publicos.png',
                url      : '/agro',
            },
            {
                title    : 'Servicios públicos',
                type     : 'item',
                icon     : 'assets/img/sidenav/servicios-publicos.png',
                url      : '/agro',
            },
            {
                title    : 'Belleza y cuidado personal',
                type     : 'item',
                icon     : 'assets/img/sidenav/belleza.png',
                url      : '/agro',
            },
            {
                title    : 'Tecnología',
                type     : 'item',
                icon     : 'assets/img/sidenav/tecnologia.png',
                url      : '/agro',
            },
            {
                title    : 'Vehículos',
                type     : 'item',
                icon     : 'assets/img/sidenav/auto.png',
                url      : '/agro',
            },
        ]  
    },  

];

export const navigationEvents= [
    
    {
        title    : 'Eventos',
        type     : 'group',
        url:'',
        activeLink:'',
        children : [
            {
                title    : 'Eventos',
                type     : 'item',
                icon     : 'assets/img/sidenav/evento.png',
                url:'/eventos',
                activeLink:'active-bg',
            },
            {
                title    : 'Calendario',
                type     : 'item',
                icon     : 'assets/img/sidenav/calendario.png',
                url:'/calendario',
                activeLink:'active-bg',
            }]  
    },  

];
export const navigationPodcasts= [
    
    {
        title    : 'Podcasts',
        type     : 'group',
        url:'',
        activeLink:'',
        children : [
            {
                title    : 'Podcasts',
                type     : 'item',
                activeLink:'active-bg',
                icon     : 'assets/img/sidenav/radio.png',
                url:'/podcasts',
            },
           ]  
    },  

];
