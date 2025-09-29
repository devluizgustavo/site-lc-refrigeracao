export function maskPhone(tel: string): string {
  tel = tel.replace(/\D/g, '');

  if (tel.length <= 10) {  
    return tel
      .replace(/(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  } else { 
    return tel
      .replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
}