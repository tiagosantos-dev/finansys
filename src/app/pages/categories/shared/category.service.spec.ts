import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Category } from './category.model';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let category 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
    category = {name: "Lazer", description: "lazlazlazlaz"}
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar o primeiro objeto cadastrado', ()=>{
    service.create(category).subscribe((e)=>{

    })
    let categoryTest 
    service.getById(category.id).subscribe((e)=>{
    categoryTest  = e


    })
    expect(categoryTest).toBeDefined();
    expect(categoryTest.id).toEqual(category.id)

  })
});
