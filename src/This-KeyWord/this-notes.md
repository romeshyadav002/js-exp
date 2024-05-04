

this substitution -> According to this substitution, if the value of this keyword is null/undefined, it will be
replaced by globalObject only in non-strict mode. This is the reason why this refers to global window object inside
function in non-strict mode.
💡 So to summarize, the value of this keyword inside function is undefined, but because of this substitution in
non-strict mode this keyword refers to globalWindowObject and in strict mode it will still be undefined



this inside arrow function
Arrow function doesn't have their own this value, they take the value from enclosing lexical context.