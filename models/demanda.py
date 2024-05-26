from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Demanda(db.Model):
    def to_dict(self):
        
        return{
            'codigo': self.codigo,
            'remetente': self.remetente,
            'enderecoRemetente': self.enderecoRemetente,
            'enderecoDestinatario': self.enderecoDestinatario,
            'destinatario': self.destinatario,
            'valor': self.valor,
            'carga': self.carga,
            'pesoCarga': self.pesoCarga,
            'codcaminhao': self.codcaminhao,
        }
    
    codigo = db.Column(db.Integer, primary_key = True, nullable=False, unique=True)
    remetente = db.Column(db.String(100))
    enderecoRemetente = db.Column(db.String(100))
    enderecoDestinatario = db.Column(db.String(100))
    destinatario = db.Column(db.String(100))
    valor = db.Column(db.Float(100))
    carga = db.Column(db.String(100))
    pesoCarga = db.Column(db.Float(100))
    codcaminhao = db.Column(ForeignKey('caminhao.codigo'))

    caminhao = relationship('Caminhao', backref='Demanda')

    def __init__(self, remetente, enderecoRemetente, destinatario, enderecoDestinatario, valor, carga, pesoCarga, codcaminhao):
        self.remetente = remetente,
        self.enderecoRemetente = enderecoRemetente
        self.destinatario = destinatario,
        self.enderecoDestinatario = enderecoDestinatario,
        self.valor = valor,
        self.carga = carga,
        self.pesoCarga = pesoCarga,
        self.codcaminhao = codcaminhao,