export const amenitieAsString = (name) => {
    const amenites = [
        { "name": "washer_in_unit", "label": "Lavadora en la unidad" },
        { "name": "pool", "label": "Piscina" },
        { "name": "gym", "label": "Gimnasio" },
        { "name": "elevator", "label": "Ascensor" },
        { "name": "parking_spot", "label": "Estacionamiento" },
        { "name": "air_conditioning", "label": "Aire condicionado" },
        { "name": "doorman", "label": "Portero" },
        { "name": "dishwasher", "label": "Lavaplatos" },
        { "name": "storage", "label": "Depósito" },
        { "name": "wheelchair", "label": "Acceso minosválidos" },
        { "name": "hardwood_floors", "label": "Piso de madera" },
        { "name": "garden", "label": "Jardín" },
        { "name": "balcony", "label": "Balcón" },
        { "name": "furnished", "label": "Amoblado" },
        { "name": "view", "label": "Vista" },
        { "name": "student_friendly", "label": "Apto para estudiantes" },
        { "name": "utilities_included", "label": "Servicios públicos incluidos" }
    ]

    return amenites.find(amenite => amenite.name == name)
}
export const featuresAsString = (name) => {
    const amenites = [
        { "name": "bedroom", "label": "Cuartos" },
        { "name": "bathroom", "label": "Baño" },
        { "name": "kitchen", "label": "Cocina" },
        { "name": "playground", "label": "Patios" },
        { "name": "living_room", "label": "Sala" },
        { "name": "dinning_room", "label": "Comedor" },
        { "name": "size", "label": "M2" }]

    return amenites.find(amenite => amenite.name == name)
}