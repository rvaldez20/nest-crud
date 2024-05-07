import 'dotenv/config';
import * as joi from 'joi'

interface EnvVars {
   PORT: number
}

//! creamos un schema
const envsSchema = joi.object({
   PORT: joi.number().required()
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env )
// console.log({error})
// console.log({envVars})

if( error ) {
   throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value;
console.log(envVars.PORT)


export const envs = {
   port: envVars.PORT
}
