import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles, Res, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe
} from '@nestjs/common';
import { ProfilsService } from './profils.service';
import { CreateProfilDto } from './dto/create-profil.dto';
import { UpdateProfilDto } from './dto/update-profil.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiImplicitFile} from "@nestjs/swagger/dist/decorators/api-implicit-file.decorator";
import {ApiBody, ApiConsumes, ApiProperty, ApiQuery} from "@nestjs/swagger";

@Controller('profils')
export class ProfilsController {
  constructor(private readonly profilsService: ProfilsService) {}

  @Get()
  findAll() {
    return this.profilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilsService.findOne(+id);
  }
@Post("avatar")
@ApiConsumes('multipart/form-data')
@ApiImplicitFile({ name: 'image' })
@UseInterceptors(
    FileInterceptor("image", { dest: "./uploads",})
)

upload(@UploadedFile(new ParseFilePipe({
  validators: [
    new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
  ],
}),) file)
{

 return this.profilsService.create(file.filename);
}
  @Get('avatar/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilDto: UpdateProfilDto) {
    return this.profilsService.update(+id, updateProfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilsService.remove(+id);
  }
}
