import { Body, Delete, Get, Param, Post, Put, Type } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Document } from 'mongoose';

// import { Type } from 'class-transformer';

export class BaseController<T extends Document, D> {
  constructor(
    private readonly service: any,
    private readonly dtoType: Type<any>,
  ) { }

  @ApiOperation({ summary: 'Cria um novo objeto' })
  @ApiTags('criar')
  @ApiOkResponse({
    description: 'Registro criado com sucesso',
    type: BaseController.prototype.dtoType,
  })
  @Post()
  async create(@Body() data: Partial<T>): Promise<T> {
    return this.service.create(data);
  }

  @ApiOperation({ summary: 'Busca todos os objetos' })
  @ApiTags('listar')
  @ApiOkResponse({
    description: 'Registros retornados com sucesso',
    type: [BaseController.prototype.dtoType],
  })
  @Get()
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @ApiOperation({ summary: 'Busca um objeto por ID' })
  @ApiTags('listar')
  @ApiOkResponse({
    description: 'Registro retornado com sucesso',
    type: BaseController.prototype.dtoType,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return this.service.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza um objeto existente' })
  @ApiTags('atualizar')
  @ApiOkResponse({
    description: 'Registro atualizado com sucesso',
    type: BaseController.prototype.dtoType,
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<T>): Promise<T> {
    return this.service.update(id, data);
  }

  @ApiOperation({ summary: 'Remove um objeto' })
  @ApiTags('remover')
  @ApiOkResponse({ description: 'Registro deletado com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }

  private getEntityType(): new () => D {
    return BaseController.prototype.dtoType;
  }
}
