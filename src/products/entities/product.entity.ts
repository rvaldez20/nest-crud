interface UpdateWithOptions {
   name?: string, 
   description?: string, 
   price?:number
}


export class Product {

   //! Forma larga
   // public id: string;
   // public name: string;
   // public description?: string;
   // public price: number;

   //! Forma corta
   constructor(
      public id: string,
      public name: string,
      public description: string,
      public price: number,
   ){}

   //! Metodo para hacer la actualizacion
   updateWith( {
      name, 
      description, 
      price
   }: UpdateWithOptions) {
      this.name = name ?? this.name;
      this.description = description ?? this.description;
      this.price = price ?? this.price;
   }

}
