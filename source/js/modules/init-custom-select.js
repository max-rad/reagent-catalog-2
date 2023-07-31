const initCustomSelect = () => {
  const selects = document.querySelectorAll('[data-select]');

  if (!selects) {
    return;
  }

  selects.forEach((select) => {
    setCustomSelect(select);
  });
};

const setCustomSelect = (select) => {
  let button = select.querySelector('[data-select-button]').querySelector('.custom-select__text');
  const options = select.querySelectorAll('[data-select-value]');
  const input = select.querySelector('[data-select-input]');

  let value;
  let prevActiveOption;
  let index;


  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-select]')) {
      if (select.classList.contains('is-open')) {
        select.classList.remove('is-open');
      }
      return;
    }

    for (let i = 0; i < options.length; i++) {
      if (options[i].classList.contains('is-active')) {
        prevActiveOption = options[i];
        break;
      }
    }

    select.classList.toggle('is-open');

    if (!target.closest('[data-select-value]')) {
      return;
    }

    value = target.closest('[data-select-value]');
    if (prevActiveOption) {
      prevActiveOption.classList.remove('is-active');
    }
    value.classList.add('is-active');

    button.innerText = value.innerText;
    input.setAttribute('value', value.innerText);
  })

  document.addEventListener('keydown', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-select]')) {
      return;
    }

    if (evt.key === 'Tab') {
      if (!target.closest('[data-select-value]')) {
        return;
      }

      for (let i = 0; i < options.length; i++) {
        if (options[i] === target) {
          index = i;
          break;
        }
      }

      if (index === options.length - 1) {
        if (select.classList.contains('is-open')) {
          select.classList.remove('is-open');
        }
      }
    }

    if (evt.key === 'Enter') {
      if (!target.closest('[data-select-value]')) {
        return;
      }

      value = target;

      if (prevActiveOption) {
        prevActiveOption.classList.remove('is-active');
      }
      value.classList.add('is-active');

      button.innerText = value.innerText;
      input.setAttribute('value', value.innerText);

      if (select.classList.contains('is-open')) {
        select.classList.remove('is-open');
      }
    }

    if (evt.key === 'Escape') {
      if (select.classList.contains('is-open')) {
        select.classList.remove('is-open');
      }
    }
  });
};

export {initCustomSelect};
