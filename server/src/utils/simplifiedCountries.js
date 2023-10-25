const simplifiedCountries = (countries) => {
    
        return countries.map(country => ({
            
                id: country.cca3,
                nameOfficial: country.name.official,
                nameCommon: country.name.common,
                flags: country.flags.png,
                coatOfArms: country.coatOfArms.png,
                continents: country.continents,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                maps: country.maps.googleMaps,
                timezones: country.timezones
            }));
    
};

module.exports = {
    simplifiedCountries
};
