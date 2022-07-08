<?php

namespace App\Http\Requests\Advert;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|min:10|max:200',
            'description' => 'required|string|min:20|max:1000',
            'price' => 'nullable|numeric|max:99999999',
            'photos' => ''
        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'Укажите заголовок',
            'title.string' => 'Укажите заголовок',
            'title.min' => '10 сиволов минимальная длина заголовка',
            'title.max' => '200 сиволов максимальная длина заголовка',
            'description.required' => 'Укажите текста объявления',
            'description.string' => 'Укажите текста объявления',
            'description.min' => '20 сиволов минимальная длина текста объявления',
            'description.max' => '1000 сиволов максимальная длина текста объявления',
            'price.numeric' => 'Не корректная цена',
            'price.max' => 'Не корректная цена',
        ];
    }
}
