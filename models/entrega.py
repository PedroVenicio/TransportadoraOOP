from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Entrega(db.Model):
    def to_dict(self):
        
        return{
            'codigo': self.codigo,
            'quantidade': self.quantidade,
            'preco': self.preco,
            'destino': self.destino,
            'codusuario': self.codusuario,
            'codcaminhao': self.codcaminhao,
            'codcarga': self.codcarga,
        }
    
    codigo = db.Column(db.Integer, primary_key = True, nullable=False, unique=True) #propriedades da coluna id
    quantidade = db.Column(db.Integer(100))
    preco = db.Column(db.Float(100))
    destino = db.Column(db.String(100))
    codusuario = db.Column(db.ForeignKey('usuario.codigo'))
    codcaminhao = db.Column(db.ForeignKey('caminhai.codigo'))
    codcarga = db.Column(db.ForeignKey('carga.codigo'))

    motorista = relationship('Usuario', backref='Entrega')
    motorista = relationship('Caminhao', backref='Entrega')
    motorista = relationship('Carga', backref='Entrega')

    def __init__(self, quantidade, preco, destino, codusuario, codcaminhao, codcarga):
        self.quantidade = quantidade,
        self.preco = preco,
        self.destino = destino,
        self.codusuario = codusuario,
        self.codcaminhao = codcaminhao,
        self.codcarga = codcarga,