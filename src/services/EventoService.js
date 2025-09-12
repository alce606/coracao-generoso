const createSemFoto = (data) => {
  const formData = new FormData();

  formData.append('nome', data.nome);
  formData.append('descricao', data.descricao);
  formData.append('localEvento', data.localEvento); 
  formData.append('cep', data.cep);
  formData.append('numero', data.numero);
  formData.append('complemento', data.complemento);
  formData.append('dataEvento', data.dataEvento); 
  formData.append('periodo', data.periodo);
  formData.append('preco', data.preco);
  formData.append('categoria_id', data.categoria_id); 
  formData.append('statusEvento', data.statusEvento); 

  return http.mainInstance.post(API_URL + "createSemFoto", formData);      
};

const createComFoto = (file, data) => {
  const formData = new FormData();

  formData.append('file', file); 
  formData.append('nome', data.nome);
  formData.append('descricao', data.descricao);
  formData.append('localEvento', data.localEvento);
  formData.append('cep', data.cep);
  formData.append('numero', data.numero);
  formData.append('complemento', data.complemento);
  formData.append('dataEvento', data.dataEvento);
  formData.append('periodo', data.periodo);
  formData.append('preco', data.preco);
  formData.append('categoria_id', data.categoria_id);
  formData.append('statusEvento', data.statusEvento);

  return http.multipartInstance.post(API_URL + "createComFoto", formData);
};

const alterar = (file, id, data) => {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }
  formData.append('nome', data.nome);
  formData.append('descricao', data.descricao);
  formData.append('localEvento', data.localEvento);
  formData.append('cep', data.cep);
  formData.append('numero', data.numero);
  formData.append('complemento', data.complemento);
  formData.append('dataEvento', data.dataEvento);
  formData.append('periodo', data.periodo);
  formData.append('preco', data.preco);

  if (typeof data.categoria_id === "number") {
    formData.append('categoria_id', data.categoria_id);
  } else {
    formData.append('categoria_id', parseInt(data.categoria_id));
  }

  if (data.statusEvento) {
    formData.append('statusEvento', data.statusEvento);
  }

  return http.multipartInstance.put(API_URL + `alterar/${id}`, formData);
};
