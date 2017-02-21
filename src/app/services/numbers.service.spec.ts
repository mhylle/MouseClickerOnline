/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {NumbersService} from "./numbers.service";

describe('NumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbersService]
    });
  });

  it('should ...', inject([NumbersService], (service: NumbersService) => {
    expect(service).toBeTruthy();
  }));

  it('should add [1,0,0,0,0] and [1,0,0,0,0] and yield [2,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([1, 0, 0, 0, 0], [1, 0, 0, 0, 0])).toEqual([2, 0, 0, 0, 0]);
  }));
  it('should add [1,0,0,0,0] and [0,1,0,0,0] and yield [1,1,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([1, 0, 0, 0, 0], [0, 1, 0, 0, 0])).toEqual([1, 1, 0, 0, 0]);
  }));
  it('should add [500,0,0,0,0] and [500,0,0,0,0] and yield [0,1,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([500, 0, 0, 0, 0], [500, 0, 0, 0, 0])).toEqual([0, 1, 0, 0, 0]);
  }));

  it('should add [950,0,0,0,0] and [100,0,0,0,0] and yield [50,1,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([950, 0, 0, 0, 0], [100, 0, 0, 0, 0])).toEqual([50, 1, 0, 0, 0]);
  }));
  it('should add [50,1,0,0,0] and [100,0,0,0,0] and yield [150,1,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([50, 1, 0, 0, 0], [100, 0, 0, 0, 0])).toEqual([150, 1, 0, 0, 0]);
  }));
  it('should add [50,1,0,0,0] and [100,1,0,0,0] and yield [150,2,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([50, 1, 0, 0, 0], [100, 1, 0, 0, 0])).toEqual([150, 2, 0, 0, 0]);
  }));
  it('should add [950,1,0,0,0] and [100,1,0,0,0] and yield [50,3,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([950, 1, 0, 0, 0], [100, 1, 0, 0, 0])).toEqual([50, 3, 0, 0, 0]);
  }));
  it('should add [950,950,0,0,0] and [200,950,0,0,0] and yield [150,3,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.add([950, 950, 0, 0, 0], [100, 950, 0, 0, 0])).toEqual([50, 901, 1, 0, 0]);
  }));

  it('should subtract [1,0,0,0,0] from [1,0,0,0,0] and yield [0,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([1, 0, 0, 0, 0], [1, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  }));
  it('should subtract [1,0,0,0,0] from [2,0,0,0,0] and yield [1,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([2, 0, 0, 0, 0], [1, 0, 0, 0, 0])).toEqual([1, 0, 0, 0, 0]);
  }));
  it('should subtract [1,0,0,0,0] from [2,1,0,0,0] and yield [1,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([2, 1, 0, 0, 0], [1, 0, 0, 0, 0])).toEqual([1, 1, 0, 0, 0]);
  }));
  it('should subtract [1,0,0,0,0] from [0,1,0,0,0] and yield [999,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([0, 1, 0, 0, 0], [1, 0, 0, 0, 0])).toEqual([999, 0, 0, 0, 0]);
  }));
  it('should subtract [1,0,0,0,0] from [0,0,1,0,0] and yield [999,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([0, 0, 1, 0, 0], [1, 0, 0, 0, 0])).toEqual([999, 999, 0, 0, 0]);
  }));
  it('should subtract [1,1,0,0,0] from [0,1,0,0,0] and yield [0,0,0,0,0]', inject([NumbersService], (service: NumbersService) => {
    expect(service.subtract([1, 0, 0, 0, 0], [1, 1, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  }));
});
