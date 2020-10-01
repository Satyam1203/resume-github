const urlTemplate = (nameOfUserOrOrganization) => {
    return `<a href='https://github.com/${nameOfUserOrOrganization}' target="_blank">@${nameOfUserOrOrganization}</a>`
}

const AddGithubLinksOnBio = (bio ="Informatics & Software Engineering Student at IHU, Chair of @IEEEIHUSerres, Software Engineer at @datascouting") => {
    const regex = /(@)([^\s,.]+)/gm;

    const matches = bio.match(regex)
    const linkifiedMatches =  matches
        .map(match => match.substr(1))
        .map(urlTemplate)

    let result = bio
    for (let indexOfMatch = 0; indexOfMatch < matches.length; indexOfMatch++) {
        result = result.replace(matches[indexOfMatch], linkifiedMatches[indexOfMatch])
    }

    return result;
}

export default AddGithubLinksOnBio;
