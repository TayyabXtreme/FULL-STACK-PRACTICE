import React from 'react';

interface CardProps {
    image: string;
    name: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, name, description }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '16px' }}>
                <h2 style={{ fontSize: '1.5em', margin: '0 0 8px' }}>{name}</h2>
                <p style={{ fontSize: '1em', color: '#555' }}>{description}</p>
            </div>
        </div>
    );
};

export default Card;