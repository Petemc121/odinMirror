

let findTheOldest = function(people) {

    person = ""
    oldest = 0;

    for (i = 0; i <people.length; i++)
    {
        if ('yearOfDeath' in people[i] == false)
        {
        age = 2021 - people[i].yearOfBirth;

        if (age > oldest)
        {
            oldest = age;
            person = people[i];
        }
        }
        else{
            age = people[i].yearOfDeath - people[i].yearOfBirth;

            if (age > oldest)
            {
                oldest = age;
                person = people[i];
            }
            } 
        

    }

    return person;

}
module.exports = findTheOldest;
