function Authorization(props) {
    return <div>
  <input type='text' value={props.login} onChange={props.handleChangeLogin} placeholder='Введите логин'></input>
  <input type='text' value={props.password} onChange={props.handleChangePassword} placeholder='Введите пароль'></input>
  <input type="button" value="Авторизоваться" onClick={props.auth}></input>
</div>
  }
  export default Authorization;