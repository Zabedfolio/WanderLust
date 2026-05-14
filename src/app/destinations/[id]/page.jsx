import React from 'react';

const DestinationDetailsPage = async({params}) => {
    const {id} = await params;
    
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
     console.log(destination)
    return (
        <div>
            Destination details page
        </div>
    );
};

export default DestinationDetailsPage;