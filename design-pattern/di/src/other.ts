import 'reflect-metadata';
import {Container, Token, Inject, Service} from 'typedi';

const myToken = new Token('SECRET_VALUE_KEY');

Container.set(myToken, 'my-secret-value');
Container.set('my-config-key', 'value-for-config-key');
Container.set('default-pagination', 30);

// somewhere else in your application
const tokenValue = Container.get(myToken);
const configValue = Container.get('my-config-key');
const defaultPagination = Container.get('default-pagination');
console.log(tokenValue, configValue, defaultPagination);

/////////////////////////////////////////////

@Service()
class InjectedExampleClass {
  print() {
    console.log('I am alive!');
  }
}

@Service()
class ExampleClass {
  @Inject()
  withDecorator: InjectedExampleClass;

  withoutDecorator: InjectedExampleClass;
}

const instance = Container.get(ExampleClass);

/**
 * The `instance` variable is an ExampleClass instance with the `withDecorator`
 * property containing an InjectedExampleClass instance and `withoutDecorator`
 * property being undefined.
 */
console.log(instance);

instance.withDecorator.print();
// prints "I am alive!" (InjectedExampleClass.print function)
console.log(instance.withoutDecorator);
// logs undefined, as this property was not marked with an @Inject decorator
