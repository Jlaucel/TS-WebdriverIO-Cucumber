# language: es
Característica: Búsqueda en Google

  Escenario: Detección de tráfico inusual por parte de Google (Escenario Negativo)
    Given que abro la página de Google
    When busco "WebdriverIO Cucumber Allure"
    Then debo ver la pantalla de verificación de tráfico inusual
