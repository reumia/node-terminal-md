# [PHP]セレクト、ラジオ、チェックボックスで現在選択されて奴を楽にチェックするようにしてくれる関数

`checkbox`や`radio`、`select`フォームのコーディングをするときに面倒でコードが長くなるのが修正時だ。現在のDBに入っている値を選択した状態で編集画面を出力しなければならないからだ。

私が作った`if_checked()`と`if_selected()`関数を使用すると、相対的に楽になる。

使い方
------

    <?php if_selected($form_value, $db_value); ?>
    <?php if_checked($form_value, $db_value); ?>

以下は使用例です。

    <select name="会員区分">
        <option value="正会員" <?php if_selected('正会員', $row[会員区分])?>></option>
        <option value="準会員" <?php if_selected('準会員', $row[会員区分])?>></option>
    </select>

`if_selected()`と`if_checked()`関数を使用法がある。出力する値が`selected`か`checked`なのかという違いがある。

パラメータ
---------

* __`$form_value`__
  (string)(required)現在の`option`や`radio`、`checkbox`の値。
* __`$db_value`__
  (string | array)(required)DBに入っている値。複数選択された`checkbox`である場合には値を配列として渡せばされる。

関数コード
---------

~~~ .php
/**
 * input:checkboxやinput:radioの値を比較してcheckedを出力します。
 * @param string $form_value 現在のinputのvalue
 * @param string | array $db_value DBに保存された値または値の配列
 * @return boolean
 */
function if_checked($form_value, $db_value){
  if(if_equal_or_in($form_value, $db_value)){
    echo 'checked';
  }
}

/**
 * selectboxの値を比較してcheckedを出力します。
 * @param string $form_value現在select > optionのvalue
 * @param string | array $db_value DBに保存された値または値の配列
 * @return boolean
 */
function if_selected($form_value, $db_value){
  if(if_equal_or_in($form_value, $db_value)){
    echo 'selected';
  }
}

/**
 * input:checkbox 、 input:radio 、 selectで、現在の値を表示して与えられたとき、現在の値が格納される値と同じである
 *あるいは保存された値の中に含まれているか(checkboxの場合)を確認する機能。
 * HTMLの長さを減らすために作ったのだ。
 * @param string $form_value現在のinputのvalue
 * @param string | array $db_value DBに保存された値または値の配列
 * @return boolean
 */
function if_equal_or_in($form_value, $db_value){
  if(is_array($db_value)){
    return in_array($form_value, $db_value);
  }else{
    return $form_value == $db_value;
  }
}
~~~
