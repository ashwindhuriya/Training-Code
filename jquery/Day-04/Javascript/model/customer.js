class Customer {
    set customerName(customerName)
    {
        this._customerName = customerName;
    }

    set customerEmail(email)
    {
        this._email = email;
    }

    set customerAddress(address)
    {
        this._address = address;
    }

    set customerGender(gender)
    {
        this._gender = gender;
    }

    set customerDOB(dob)
    {
        this._dob = dob;
    }

    set customerContact(contact)
    {
        this._contact = contact;
    }

    set customerId(id)
    {
        this._id = id;
    }

    get customerName()
    {
        return this._customerName;
    }

    get dob()
    {
        return this._dob;
    }

    get id()
    {
        return this._id;
    }

    get gender()
    {
        return this._gender;
    }

    get email()
    {
        return this._email;
    }

    get address()
    {
        return this._address;
    }

    get contact()
    {
        return this._contact;
    }
}

export default Customer;