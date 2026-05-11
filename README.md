# Renforcer la sécurité des mots de passe utilisateur

## Cas d'usage

> En tant que responsable de la sécurité
> je souhaite renforcer l'accès aux données de l'application

## Règles générales

- Un mot de passe ne peux pas avoir 2 caractères identiques consécutifs, quel que soit leur casse.
- Un mot de passe ne doit pas contenir 3 caractères identiques, quel que soit leur casse.

### Exemple passant

- `@Azerty123`
- `$JohnDoe0`

### Exemple cassant

- `AAzerty123`
- `Aazerty123`
- `AzerAtyA123`
- `AzeratyA123`

## Tests d'acceptance

### L'inscription doit échouer avec une erreur, quand un mot de passe invalide est proposé

> **Quand** un utilisateur s'inscrit avec un email "**sample@mail.com**" et un mot de passe "**AAzerty123**"
>
> **Alors** le programme échoue avec l'erreur "**Mot de passe invalide**"

### Change user account's password should throw an error when an invalid password is submitted

> **Soit** un utilisateur avec l'email "**sample@mail.com**"
>
> **Quand** l'utilisateur "sample@mail.com" change de mot de passe pour "**AAzerty123**"
>
> **Alors** le programme échoue avec l'erreur "**Mot de passe invalide**".
