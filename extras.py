# class Vehicle(db.Model):
#     """This is the table of a vehicle's make and model"""

#     __tablename__ = 'vehicles'

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     vehicle_brand = db.Column(
#         db.Text, 
#         nullable=False,
#     )

#     vehicle_model + db.Column(
#         db.Text,
#         nullable=False,
#     )

#     def __repr__(self):
#         return f"<Vehicle #{self.id}: {self.vehicle_brand}, {self.model}, {self.type}>"

# class Country(db.Model): 
#     """List of all countries""" 

#     __tablename__ = 'countries' 

#     country_name = db.Column(
#         db.Text, 
#         nullable=False,
#         primary_key=True
#     )
# class Vehicle_Trip(db.Model):
#     """This stores the instance of personal vehicle travel calculation"""

#     __tablename__ = 'vehicle_trips'

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade')
#     )

#     vehicle_id = db.Column(
#         db.Integer,
#         db.ForeignKey('vehicles.id')
#     )

#     distance_value = db.Column(
#         db.Float, 
#         nullable=False,
#     )

#     timestamp = db.Column(
#         db.DateTime,
#         nullable=False,
#         default=datetime.utcnow(),
#     )

# class Shipping_Trip(db.Model): 
#     """This stores the instance of a shipping calculation"""

#     __tablename__ = 'shipping_orders' 

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade')
#     )

#     distance_value = db.Column(
#         db.Float, 
#         nullable=False,
#     )

#     weight_value = db.Column(
#         db.Float, 
#         nullable=False,
#     )

#     timestamp = db.Column(
#         db.DateTime,
#         nullable=False,
#         default=datetime.utcnow(),
#     )

# class Flight(db.Model): 
#     """This stores the instance of a flight calculation"""

#     __tablename__ = 'flights' 

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade')
#     )

#     distance_value = db.Column(
#         db.Float, 
#         nullable=False,
#     )

#     timestamp = db.Column(
#         db.DateTime,
#         nullable=False,
#         default=datetime.utcnow(),
#     )

# class Electricity(db.Model): 
#     """This stores the instance of a housing electricity calculation"""

#     __tablename__ = 'electricity'

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade')
#     )

#     timestamp = db.Column(
#         db.DateTime,
#         nullable=False,
#         default=datetime.utcnow(),
#     )

#     electricity_value = db.Column(
#         db.Float, 
#         nullable=False,
#     ) 

# class User_Calculation(db.Model):
#     """This associates the user's calculations"""

#     __tablename__ = 'user_calculations'

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade')
#     )

#     calculation_id = db.Column(
#         db.Integer, 
#         db.ForeignKey('calculations.id')
#     )

#     type = db.Column(
#         db.Text,
#         nullable=False
#     )
    
#     def __repr__(self):
#         return f"<User_Calculation #{self.id}: {self.user_id}, {self.calculation_id}, {self.type}>"


"""SQLAlchemy models for Carbon Print Calculator."""
from datetime import datetime

from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy() 

bcrypt = Bcrypt()

 

class User(db.Model):
    """User in the system."""

    __tablename__ = 'users'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    username = db.Column(
        db.String(70),
        nullable=False,
        unique=True,
    )

    password = db.Column(
        db.Text,
        nullable=False,
    )

    email = db.Column(
        db.String(120),
        nullable=False,
        unique=True,
    )

    def __repr__(self):
        return f"<User #{self.id}: {self.username}, {self.email}>"

    @classmethod
    def signup(cls, username, password, email):
        """Sign up user.

        Hashes password and adds user to system.
        """

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(
            username=username,
            password=hashed_pwd,
            email=email,
        )

        db.session.add(user)
        return userT

    @classmethod
    def authenticate(cls, username, password):
        """Find user with `username` and `password`.

        This is a class method (call it on the class, not an individual user.)
        It searches for a user whose password hash matches this password
        and, if it finds such a user, returns that user object.

        If can't find matching user (or if password is wrong), returns False.
        """

        user = cls.query.filter_by(username=username).first()

        if user:
            is_auth = bcrypt.check_password_hash(user.password, password)
            if is_auth:
                return user

        return False



def connect_db(app): 
    db.app = app 
    db.init_app(app)



# class Calculate(db.Model): 
#     """This stores every instance of a calculation made""" 

#     __tablename__ = 'calculations' 

#     id = db.Column(
#         db.Integer,
#         primary_key=True,
#     ) 

#     user_id = db.Column(
#         db.Integer,
#         db.ForeignKey('users.id', ondelete='cascade'),
#         nullable=False,
#     )

#     user = db.relationship('User')

#     timestamp = db.Column(
#         db.DateTime,
#         nullable=False,
#         default=datetime.utcnow(),
#     )

#     type = db.Column(
#         db.Text,
#         nullable=False
#     )

#     distance_value = db.Column(
#         db.Float, 
#         nullable=False,
#         default=0
#     )

#     electricity_value = db.Column(
#         db.Float, 
#         nullable=False,
#         default=0
#     )

#     weight_value = db.Column(
#         db.Float, 
#         nullable=False,
#         default=0
#     )

#     country_name = db.Column(
#         db.Text,
#         default=None,
#     )
    
#     # def serialize_vehicle_trip(self): 
#     #     return {
#     #         'type': "vehicle", 
#     #         'distance_unit': "mi",
#     #         'distance_value': self.distance_value, 
#     #         'vehicle_model_id': self.vehicle_model_id,
#     #     }

#     def __repr__(self):
#         return f"<Calculation #{self.id}: {self.user_id}, {self.timestamp}, {self.type}>"


# class Vehicle(db.Model):
#     """This is the table of a vehicle's make and model"""

#     __tablename__ = 'vehicles'

#     id = db.Column(
#         db.Text,
#         primary_key=True,
#     ) 

#     vehicle_brand = db.Column(
#         db.Text, 
#         nullable=False,
#     )

#     vehicle_model + db.Column(
#         db.Text,
#         nullable=False,
#     )

#     def __repr__(self):
#         return f"<Vehicle #{self.id}: {self.vehicle_brand}, {self.model}, {self.type}>"

if __name__ == '__main__':
    app.run() 

# @app.route('users/vehicle', methods=['GET', 'POST'])
# def record_vehicle_model():
#     """Before vehicle trip calulation, record vehicle info""" 

#     if not g.user:
#         flash("Access unauthorized.", "danger")
#         return redirect("/")

#     form = VehicleIDForm()

#     if form.validate_on_submit():
#         calculation = Message(text=form.text.data)
#         calculation = 
#         g.user.messages.append(msg)
#         db.session.commit()

#         vehicle_brand = form.vehicle_brand.data
#         vehicle_model = form.vehicle_model.data

#         return redirect(f"/users/{g.user.id}")

    
#     return render_template('vehicle-form.html', form=form)

# @app.route('users/vehicle-trip', methods=['GET', 'POST'])
# def ask_for_parameters():
#     """Present form for user vehicle carbon footprint calculation"""

#     if not g.user:
#         flash("Access unauthorized.", "danger")
#         return redirect("/")
#     form = VehicleTripForm()

#     if form.validate_on_submit():
#         distance_value = form.distance_value.data
#         new_trip = Calculate(user_id=g.user.id, type=vehicle, distance_value=distance_value)

#         new_cupcake = Cupcake(flavor=request.json["flavor"], size=request.json["size"], rating=request.json["rating"], image=request.json["image"])
#         db.session.add(new_cupcake)
#         db.session.commit()
#         response_json = jsonify(trip_info=new_trip.serialize_vehicle_trip())
#         return (response_json, 201)

#     return render_template('vehicle-trip.html', form=form)