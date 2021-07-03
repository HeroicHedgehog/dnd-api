# endpoint
## /getCharacter
Given a character ID it will return all character information
```
{
    id:int
}
```

## /newCharacter
Given all character information, it will create a new character.
```
{
    name: char (100)
    class: char (100)
    race: char (100)
    intelligence: int
    wisdom: int
    charisma: int
    strength: int
    dexterity: int
    constitution: int
    height: int
    weight: int
    level: int
    speed: int
    healthpoints: int   
    gold: int
    copper: int
    silver: int
    platinum: int
    alignment: char (100)
    temphp: int
    inspiration: Bool
    deathsavefail: Bool
    deathsavesuccess: Bool
}
```

## /newItem
Given a character ID it will return all character information
```
{
    characterID: int
    name: char (100)
    description: string
    equipped: Bool
}
```