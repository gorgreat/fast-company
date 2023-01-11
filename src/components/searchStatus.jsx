import React from "react"

const declensions = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

const renderPhrase = (number) => {
    return number === 0 ? 
    'никто не тусанет с тобой, дружище' :
    number + ' ' + declensions(number, ['человек', 'человека', 'человек']) + ' ' + declensions(number, ['тусанет', 'тусанут', 'тусанет']) + ' с тобой сегодня' 
}

const SearchStatus = (length) => {
    return <h1><span className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>{renderPhrase(length)}</span></h1>
}

export default SearchStatus