from database.db import db

class Carga(db.Model):
    def to_dict(self):
        
        return{
            'codigo': self.codigo,
            'tipo': self.tipo
            'valor': self.valor
        }
    
    codigo = db.Column(db.Integer, primary_key = True, nullable=False, unique=True) #propriedades da coluna id
    tipo = db.Column(db.String(100))
    valor = db.Column(db.Float(100))

    def __init__(self, nome):
        self.tipo = tipo,
        self.valor = valor,