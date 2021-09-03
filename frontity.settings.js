const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://ebby.pl",
      "title": "Test Frontity Shop",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/sample-page/"
            ],
            [
              "konto",
              "/my-account/"
            ],
            [
              "Sklep",
              "/shop/"
            ],
            [
              "Koszyk",
              "/cart/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ebby.pl/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
