# Ejercicio 1

**Problema:** 
1. Pedir al usuario la medida de un lado de un cuadrado en pixeles .
2. Calcular el area del cuadrado.
3. Imprimir en un alert el resultado.

Entrada:
- Medida de un lado del cuadrado (L)

Salida:
- El área del cuadrado

``` mermaid
flowchart 

A([Inicio]) --> B(Pedir al usuario el largo del lado del cuadrado)
B --> C(Guardar en variable L)
C --> D{L es un número positivo?}
D --> |no| E(Alertar al usuario 'Ingrese un numero positivo')
E --> B
D --> |sí| F(Crear una variable A = L * L)
F --> G(alert el valor de 'A')
G --> H([Fin])
```