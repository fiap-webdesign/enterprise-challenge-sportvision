// Centraliza o mapa em São Paulo
var map = L.map("map").setView([-23.55, -46.63], 12);

// Mapa base (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
}).addTo(map);

// Lista dos parques paulistanos
var parquesSP = [
    {
        nome: "Parque Ibirapuera",
        descricao: "Um dos maiores e mais icônicos parques de São Paulo, ideal para slackline e patinação.",
        coords: [-23.587, -46.657],
    },
    {
        nome: "Parque Villa-Lobos",
        descricao: "Espaço amplo com áreas para ciclismo, frisbee e esportes de ar livre.",
        coords: [-23.545, -46.720],
    },
    {
        nome: "Parque do Carmo",
        descricao: "Perfeito para caminhadas longas, corridas e práticas esportivas alternativas.",
        coords: [-23.564, -46.487],
    },
    {
        nome: "Parque da Juventude",
        descricao: "Antigo Carandiru, hoje com pistas de skate e quadras — ótimo para esportes urbanos.",
        coords: [-23.511, -46.625],
    },
];

// marcadores
parquesSP.forEach((p) => {
    L.marker(p.coords)
        .addTo(map)
        .bindPopup(`<b>${p.nome}</b><br>${p.descricao}`);
});
