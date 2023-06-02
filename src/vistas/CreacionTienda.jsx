import React, { useState } from 'react';
import PulidoTemplate from './PulidoTemplate';
import RusticoTemplate from './RusticoTemplate';
import TecnologicoTemplate from './TecnologicoTemplate';

const CreacionTienda = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleTemplateSelection = (template) => {
        setSelectedTemplate(template);
    };

    const templates = [
        { id: 1, name: 'Pulido Template', component: <PulidoTemplate /> },
        { id: 2, name: 'Rustico Template', component: <RusticoTemplate /> },
        { id: 3, name: 'Tecnologico Template', component: <TecnologicoTemplate /> },
        // Agrega más plantillas según tus necesidades
    ];

    return (
        <div>
            <h2>Creación de mi tienda</h2>
            <form>
                {/* Resto de los campos del formulario */}

                <label>Selecciona una plantilla:</label>
                <ul>
                    {templates.map((template) => (
                        <li key={template.id}>
                            <label>
                                <input
                                    type="radio"
                                    name="template"
                                    checked={selectedTemplate === template}
                                    onChange={() => handleTemplateSelection(template)}
                                />
                                {template.name}
                            </label>
                            <img
                                src={template.preview}
                                alt={template.name}
                                style={{ transform: 'scale(0.15)' }}
                            />
                        </li>
                    ))}
                </ul>

                {selectedTemplate && (
                    <div>
                        <h3>Plantilla seleccionada: {selectedTemplate.name}</h3>
                        {selectedTemplate.component}
                    </div>
                )}

                <button type="submit">Crear tienda</button>
            </form>
        </div>
    );
};

export default CreacionTienda;