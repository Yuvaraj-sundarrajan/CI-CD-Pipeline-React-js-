import { fireEvent,render, screen } from '@testing-library/react';
// import App from './Add';
import Login from './Components/Login/Login';
import SignUp from './Components/Register/Register'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

xdescribe('My Test Suite',()=>{                      //"Describe" is used to grouping all the test cases Like this"//
  test('Test case 1',() =>{                                //"xtest or skip" is used to ignore the uni test cases//
    render(<Add/>);
    var text1=screen.getByText('Welcome to Jest testing');            //"xdescribe" is used to skip the entire unit test group //
    expect(text1).toBeInTheDocument();
  });
  
  test('Test case 2 ',()=>{
  render(<Add/>);
  var text2 =screen.getByText('Hello Yuvaraj');
  expect(text2).toBeInTheDocument();
  });

  test('Test case 3',() =>{                                
    render(<Add/>);
    var element1=screen.getByTestId('Heading');           
    expect(element1).toHaveTextContent("Welcome to Jest testing") /*"toHaveTextContent()" is used to wheather the
                                                                                                               element having different content is going to fail condition */
  });
});

xdescribe('My Calculator Test Suite',() =>{
  test('test case-1[Render all UI elements]', () =>{
    render(<Add/>);
    const TextBox1 =screen.getByTestId('input1');
    const TextBox2 =screen.getByTestId('input2');
    const AddButton =screen.getByTestId('Button');

    expect(TextBox1).toBeInTheDocument();
    expect(TextBox2).toBeInTheDocument();
    expect(AddButton).toBeInTheDocument();
  })
  test('Test case-2[Render all lables and Text messages]', () =>{
    render(<Add/>);
    const Label1 =screen.getByTestId('Label1');
    const Label2 =screen.getByTestId('Label2');
    const Heading =screen.getByTestId('Heading');
    const result =screen.getByTestId('result');

    //==== Heading====//
    expect(Heading).toBeInTheDocument();
    expect(Heading).toHaveTextContent("Adding two number");

//====Label===== //
    expect(Label1).toBeInTheDocument();
      expect(Label1).toHaveTextContent("Enter the number 1:");
    expect(Label2).toBeInTheDocument();
    expect(Label2).toHaveTextContent("Enter the number 2:");

 //====Result====//  
    expect(result).toBeInTheDocument();
     expect(result).toHaveTextContent("sum:");
  })

  test('Test case-3 [Testing Textboxes Initial value]',() =>{
    render(<Add/>);
    const textbox1=screen.getByTestId('input1');
    const textbox2=screen.getByTestId('input2');
    expect(textbox1).toHaveTextContent('');
    expect(textbox2).toHaveTextContent('');
  });
  
  test('Test case-4 [Testing rendering any output without giving inputs',() =>{
    render(<Add/>);
   const button = screen.getByTestId('Button');
   fireEvent.click(button)
   const result =screen.getByTestId('result');
   expect(result).toHaveTextContent("sum:NaN")
  });

test('Test case-5 [Sucess Test result]',() =>{
  render(<Add/>)
const textbox1 = screen.getByTestId('input1');
const textbox2 = screen.getByTestId('input2');
const addButton = screen.getByTestId('Button');

fireEvent.change(textbox1,{target :{value : 10}});
fireEvent.change(textbox2,{target :{value : 50}});

fireEvent.click(addButton);
const result =screen.getByTestId('result');
expect(result).toHaveTextContent("sum:60")
});

})


//==============Test Cases for Login & Register ===============//

xdescribe('Login Component', () => {
  test('renders Login component without crashing', () => {
    render(<Login />);
  });

  test('email and password input and submit button exist', () => {
    const { getByTestId } = render(<Login />);

    const emailInput = getByTestId('Email_Textbox');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = getByTestId('Pwd_Textbox');
    expect(passwordInput).toBeInTheDocument();

    const submitButton = getByTestId('Submit_btn');
    expect(submitButton).toBeInTheDocument();
  });

  test('change value of email and password input', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('Email_Textbox');
    const passwordInput = getByTestId('Pwd_Textbox');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(passwordInput.value).toBe('password');
  });

  test('submit button is enabled when email and password are not empty', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('Email_Textbox');
    const passwordInput = getByTestId('Pwd_Textbox');
    const submitButton = getByTestId('Submit_btn');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(submitButton).not.toBeDisabled();
  });

  test('shows error message when email is invalid', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('Email_Textbox');

    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });

    const emailError = getByTestId('Email_ErrorMsg');
    expect(emailError).toBeInTheDocument();
  });

  test('shows error message when password is less than 6 characters', () => {
    const { getByTestId } = render(<Login />);
    const passwordInput = getByTestId('Pwd_Textbox');

    fireEvent.change(passwordInput, { target: { value: 'pass' } });

    const passwordError = getByTestId('Pwd_ErrorMsg');
    expect(passwordError).toBeInTheDocument();
  });
});


//=============Register Module test========//

describe('Register Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<SignUp />);
    expect(getByText('Register')).toBeInTheDocument();
  });

  it('updates state when input changes', () => {
    const { getByPlaceholderText } = render(<SignUp />);
    const firstNameInput = getByPlaceholderText('First name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });
  
  // it('validates email input on change', () => {
  //   const { getByPlaceholderText } = render(<SignUp />);
  //   const emailInput = getByPlaceholderText('Enter email');
  //   fireEvent.change(emailInput, { target: { value: 'notAnEmail' } });
  //   expect(emailInput.value).toBe('notAnEmail');
  //   // Assuming you have a way to access displayed errors
  //   const emailError = getByTestId('emailError');
  //   expect(emailError).toHaveTextContent('Email is not valid!');
  // });

  // it('validates password input on change', () => {
  //   const { getByPlaceholderText } = render(<SignUp />);
  //   const passwordInput = getByPlaceholderText('Enter password');
  //   fireEvent.change(passwordInput, { target: { value: '123' } });
  //   expect(passwordInput.value).toBe('123');
  //   // Assuming you have a way to access displayed errors
  //   const passwordError = getByTestId('passwordError');
  //   expect(passwordError).toHaveTextContent('Password should be at least 6 characters long!');
  // });

  // it('validates confirmPassword input on change', () => {
  //   const { getByPlaceholderText } = render(<SignUp />);
  //   const passwordInput = getByPlaceholderText('Enter password');
  //   const confirmPasswordInput = getByPlaceholderText('Enter password');
  //   fireEvent.change(passwordInput, { target: { value: 'password' } });
  //   fireEvent.change(confirmPasswordInput, { target: { value: 'differentPassword' } });
  //   expect(confirmPasswordInput.value).toBe('differentPassword');

  //   const confirmPasswordError = getByTestId('confirmPasswordError');
  //   expect(confirmPasswordError).toHaveTextContent('Passwords do not match!');
  // });

  it('submits the form', () => {
    const { getByText } = render(<SignUp />);
    const submitButton = getByText('Sign Up');
    fireEvent.click(submitButton);
    // Here you would typically check that the form submission function has been called
    // This will depend on how you handle form submission in your component
  });
});




