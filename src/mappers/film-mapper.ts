export interface FilmInterface {
  id?: string;
  título: string;
  fecha_de_lanzamiento: string;
  director: string;
  episodio_id: number;
  //   apertura_rastreo: string;
  //   productor: string;
  //   caracteres: string;
  //   vehículos: string;
  //   especies: string;
  //   creado: string;
  //   editado: string;
  //   URL: string;
}

export class Film implements FilmInterface {
  id?: string;
  título: string;
  fecha_de_lanzamiento: string;
  director: string;
  episodio_id: number;
  //   apertura_rastreo: string;
  //   productor: string;
  //   caracteres: string;
  //   vehículos: string;
  //   especies: string;
  //   creado: string;
  //   editado: string;
  //   URL: string;

  
  constructor(params: FilmInterface) {
      Object.assign(this, params);
    }
	// static create(params: Company.CreateParams) {
	// 	const company = new Company()
	// 	company.id = params.id
	// 	company.name = params.name
	// 	company.address = params.address
	// 	company.documentType = params.documentType
	// 	company.documentNumber = params.documentNumber
	// 	company.commercialName = params.commercialName
	// 	company.legalRepresentative = params.legalRepresentative

	// 	return company
	// }
}

// export namespace ApiFilm {

//     'id'||'title'||

// }

