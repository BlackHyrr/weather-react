const getWindDirection = (deg) => {
    if(deg === undefined) return;
    const directions = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West'];
    const index = Math.floor((deg % 360) / 45);
    return directions[index];
}

export default getWindDirection;
